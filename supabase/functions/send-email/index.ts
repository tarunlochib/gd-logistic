
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const client = new SmtpClient()
    const { type, data } = await req.json()

    await client.connectTLS({
      hostname: "smtp.gmail.com",
      port: 465,
      username: Deno.env.get('SMTP_USERNAME'),
      password: Deno.env.get('SMTP_PASSWORD'),
    })

    let subject, content
    if (type === 'contact') {
      subject = 'New Contact Form Submission'
      content = `
        Name: ${data.name}
        Email: ${data.email}
        Message: ${data.message}
      `
    } else if (type === 'quote') {
      subject = 'New Quote Request'
      content = `
        Full Name: ${data.fullName}
        Company Name: ${data.companyName}
        Email: ${data.email}
        Phone: ${data.phone}
        Service Type: ${data.serviceType}
        Details: ${data.details}
      `
    }

    await client.send({
      from: Deno.env.get('SMTP_USERNAME'),
      to: "tarunlochib@gmail.com",
      subject,
      content,
    })

    await client.close()

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
