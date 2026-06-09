import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const typeLabels: Record<string, string> = {
  voluntario: "Quiere ser voluntario",
  donador: "Quiere hacer una donación",
  patrocinador: "Empresa / institución",
  otro: "Otro",
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, type, message } = await request.json()

    if (!name || !email) {
      return Response.json({ error: "Nombre y correo son obligatorios." }, { status: 400 })
    }

    const tipo = typeLabels[type] ?? type

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "PGM Web <onboarding@resend.dev>",
      to: "pequesgrandesmentes@gmail.com",
      replyTo: email,
      subject: `Nuevo mensaje de ${name} — ${tipo}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #4a3f35; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c8a6b;">Nuevo mensaje desde el formulario "Únete a PGM"</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold;">Nombre:</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Correo:</td><td>${email}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Teléfono:</td><td>${phone || "No proporcionado"}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Interés:</td><td>${tipo}</td></tr>
          </table>
          <div style="margin-top: 16px;">
            <p style="font-weight: bold; margin-bottom: 4px;">Mensaje:</p>
            <p style="white-space: pre-wrap; background: #f5f3ee; padding: 12px; border-radius: 8px;">${message || "Sin mensaje"}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.log("[v0] Resend error:", error)
      return Response.json({ error: "No se pudo enviar el correo." }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (err) {
    console.log("[v0] Contact route error:", err)
    return Response.json({ error: "Error al procesar la solicitud." }, { status: 500 })
  }
}
