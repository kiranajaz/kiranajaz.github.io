function calculateMonthlyPayment(loanAmount, annualInterestRate, loanTermInYears) {
    // Check for positive numbers
    if (loanAmount <= 0 || annualInterestRate <= 0 || loanTermInYears <= 0) {
      throw new Error('All parameters must be positive numbers.');
    }
  
    // Convert annual interest rate to monthly rate
    const monthlyInterestRate = annualInterestRate / 100 / 12;
  
    // Convert loan term from years to months
    const loanTermInMonths = loanTermInYears * 12;
  
    // Calculate monthly payment using the formula
    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -loanTermInMonths));
  
    return monthlyPayment.toFixed(2); // Return the result rounded to 2 decimal places
  }
  
  // Testing data
  const loanAmount = 1000000; // Loan amount in dollars
  const annualInterestRate = 1; // Annual interest rate in percentage
  const loanTermInYears = 10; // Loan term in years
  
  try {
    const monthlyPayment = calculateMonthlyPayment(loanAmount, annualInterestRate, loanTermInYears);
    console.log(`Monthly Mortgage Payment: $${monthlyPayment}`);
  } catch (error) {
    console.error(error.message);
  }
  


  function calculateAverageScores(...students) {
    const averageScores = [];
  
    // Iterate through each student's scores
    for (const studentScores of students) {
      // Calculate the average score for each student
      const averageScore =
        studentScores.reduce((sum, score) => sum + score, 0) / studentScores.length;
  
      // Push the average score to the result array
      averageScores.push(Math.round(averageScore)); // Rounding to the nearest integer
    }
  
    return averageScores;
  }
  
  // Testing data
  const stu1 = [90, 80, 80, 90, 85, 85];
  const stu2 = [100, 90, 100, 90];
  const stu3 = [60, 80, 100, 80];
  const stu4 = [99, 99, 99];
  
  // Call the function with the testing data
  const result = calculateAverageScores(stu1, stu2, stu3, stu4);
  
  // Display the result
  console.log("Average Scores:", result);
  

  function submitGuestCount() {
    const guestCountInput = document.getElementById('guestCount');
    const seatingContainer = document.getElementById('seating');

    // Validate user input
    const guestCount = parseInt(guestCountInput.value, 10);
    if (isNaN(guestCount) || guestCount < 1 || guestCount > 10) {
      alert('Please enter a number between 1 and 10.');
      return;
    }

    // Clear previous seating
    seatingContainer.innerHTML = '';

    // Display seats based on the guest count
    for (let i = 1; i <= guestCount; i++) {
      const seat = document.createElement('div');
      seat.className = 'seat';
      seat.textContent = i;
      seatingContainer.appendChild(seat);
    }
  }