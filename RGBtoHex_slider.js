const RGBinput = document.querySelector(".controlPanel");
const RGBSlider = document.querySelectorAll(".Slider");
const HexIndexID = document.querySelector("#HexIndexID");
const HexColorID = document.querySelector("#HexColorID");

// RGB轉換成Hex，十進位制轉為16進位制，運用padStart將轉為16進位制但未滿兩位數的數字補上0。
function RGBtoHex() {
  let Hex = "#";
  RGBSlider.forEach((slider) => {
    Hex += Number(slider.value).toString(16).padStart(2, "0");
  });
  return Hex;
}

// 監聽input事件，在滑軌上移動所產生的數字，本來就是input事件的屬性value。
RGBinput.addEventListener("input", function (event) {
  const target = event.target;
  const NumberOutput = target.nextElementSibling;
  NumberOutput.innerText = target.value;
  HexIndexID.innerText = RGBtoHex();
  HexColorID.style.backgroundColor = HexIndexID.innerText;
});
