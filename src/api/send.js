export default async function formHandler(req, res) {
  
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_APIKEY);

    const { method, body } = req;

    const mailData = {
      from: 'support@yah-space.work',
      to: body.formEmail,
      bcc: 'support@yah-space.work',
      subject: 'ヤー・スペーステクノロジーWebサイトからの問い合わせ',
      html: `<p>以下のお問い合わせを受け付けました。回答をお待ちください。<br />
              ヤー・スペーステクノロジーサポートチーム</p>
             <hr>
             <p>お名前：${body.formName}</p>
             <p>アドレス：${body.formEmail}</p>
             <p>メッセージ：${body.formTextarea}</p>`,
    }

  const response = sgMail.send(mailData)
    .then(
      result => res.status(200).json(JSON.stringify(result))
      )
    .catch(
      error => res.status(500).json(JSON.stringify(error))
    )
}
