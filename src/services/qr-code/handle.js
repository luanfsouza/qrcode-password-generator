import chalk from "chalk";
import qrcode from "qrcode-terminal";

async function handle(err, result) {
  if (err) {
    console.log("error on application");
    return;
  }

  const isSmall = result.type == 2;
  qrcode.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green.bold("QR CODE gerado com sucesso!:\n"));
    console.log(qrcode);
  });
}

export default handle;
