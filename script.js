const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const palindromeChecker = (text) => {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  const length = cleaned.length;

  if (length===1) return result.textContent = `${text} is a palindrome`;

  const mid = Math.floor(length/2);
  for (let i=0, j=length-1; i<mid; i++, j--){
    if(cleaned[i] !== cleaned[j]){
      result.textContent = `${text} is not a palindrome`;
      return;
    }
  }
  return result.textContent = `${text} is a palindrome`;
}

const checkUserInput = () => {
  const inputValue = textInput.value.trim();
  if(!inputValue){
    alert("Please input a value");
    return;
  } else{
    palindromeChecker(inputValue);
  }

}

checkButton.addEventListener("click", checkUserInput);

textInput.addEventListener("keydown", (e)=>{
  if (e.key === "Enter") {
    checkUserInput();
  }
})
