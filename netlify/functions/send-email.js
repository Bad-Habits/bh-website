exports.handler = async (e) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "This is the message being returned",
      }),
    };
  } catch (err) {
    console.log("Error in send email handler:", err);

    return {
      statusCode: 400,
      body: JSON.stringify({ err }),
    };
  }
};
