export default function mathFuction (mathFuction) {
  let res = [];
  try {
    res.push(mathFuction());
  }catch (err) {
    res.push("Error: " + err.message);
  }finally {
    res.push("Guardrail was processed");
  }

  return res;
}
