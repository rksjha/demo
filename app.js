const spendRange = document.querySelector("#spendRange");
const spendDisplay = document.querySelector("#spendDisplay");
const coinOutput = document.querySelector("#coinOutput");
const inquiryForm = document.querySelector("#inquiryForm");
const formStatus = document.querySelector("#formStatus");

const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace("₹", "Rs ");

const formatNumber = (value) =>
  new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(value);

const updateCalculator = () => {
  const spend = Number(spendRange.value);
  const coins = Math.floor(spend / 1000);
  spendDisplay.textContent = formatINR(spend);
  coinOutput.textContent = formatNumber(coins);
};

spendRange?.addEventListener("input", updateCalculator);
updateCalculator();

inquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(inquiryForm);
  const name = String(data.get("name") || "").trim();
  formStatus.textContent = name
    ? `Inquiry noted for ${name}. Portal submission wiring can be connected in the next integration stage.`
    : "Inquiry noted. Portal submission wiring can be connected in the next integration stage.";
  inquiryForm.reset();
});
