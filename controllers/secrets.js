const Secret = require("../database/models/secret");

const generateLinkWithLength = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const createSecret = async (req, res) => {
  const linkForSecret = generateLinkWithLength(16);
  const newDoc = new Secret({
    link: linkForSecret,
    value: req.body.secret,
  });

  try {
    await newDoc.save();
    return res.status(200).json({
      linkForSecret: `http://localhost:3000/${linkForSecret}`,
    });
  } catch (e) {
    return res.sendStatus(500);
  }
};

const retrieveSecret = async (req, res) => {
  try {
    const foundSecret = await Secret.findOne({ link: req.params.secretLink });
    if (!foundSecret) return res.sendStatus(404);

    await Secret.deleteOne({ link: req.params.secretLink });

    return res.status(200).json({
      secret: foundSecret.value,
    });
  } catch (e) {
    console.log("e: ", e);
    return res.sendStatus(500);
  }
};

module.exports = {
  createSecret,
  retrieveSecret,
};
