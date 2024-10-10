function dayCheck() {
  let day = prompt("Enter a day of the week: ");
  switch (day) {
    case "Monday":
      alert("Your task for Monday is: Finish your assignment");
      break;
    case "Tuesday":
      alert("Your task for Tuesday is: Wash your clothes");
      break;
    case "Wednesday":
      alert("Your task for Wednesday is: Sleep");
      break;
    case "Thursday":
      alert("Your task for Thursday is: Eat");
      break;
    case "Friday":
      alert("Your task for Friday is: Play games");
      break;
    case "Saturday":
      alert("Your task for Saturday is: Sleep");
      break;
    case "Sunday":
      alert("Your task for Sunday is: Go to church");
      break;
    default:
      alert("Please only enter a day of week, follow the sentence case format.")
  };
}
