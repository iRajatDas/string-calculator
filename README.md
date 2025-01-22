# String Calculator with TDD and Frontend UI

Welcome to the **String Calculator** project!

---

## 🚀 Features

1. **String Calculator Functionality**:

   - Handles comma-separated numbers and sums them up.
   - Supports newlines as delimiters.
   - Allows custom delimiters specified in the format: `//[delimiter]\n[numbers...]`.
   - Throws an error for negative numbers and lists all negative values in the error message.
   - Returns `0` for empty strings.

2. **Frontend Interface**:

   - Input box for entering numbers or custom delimiter strings.
   - Dynamic display of calculation results or error messages.
   - Clear and Calculate buttons for user interaction.
   - Responsive design using Tailwind CSS.

3. **Modularity and Scalability**:

   - Clean separation of concerns between logic (`add` function) and UI (`StringCalculator` component).
   - Easily extendable for additional functionality or styling.

4. **Deployed Application**:
   - Live demo hosted [here](https://string-calculator-rajat.vercel.app/).

---

## 🛠️ Tech Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Testing**: Vitest
- **Deployment**: Vercel/Netlify (link provided above)

---

## 📚 How It Works

### **Backend Functionality**

The `add` function handles the following cases:

- **Empty String**: Returns `0`.
- **Single Number**: Returns the number itself.
- **Multiple Numbers**: Returns their sum.
- **Newline Delimiters**: Handles strings with numbers separated by commas or newlines (e.g., `"1\n2,3"`).
- **Custom Delimiters**: Parses custom delimiters specified in the format `//[delimiter]\n[numbers...]` (e.g., `"//;\n1;2"`).
- **Negative Numbers**: Throws an exception with a message listing all negative numbers.

### **Frontend**

- Input field for entering the string.
- Buttons:
  - `Calculate`: Triggers the `add` function and displays the result.
  - `Clear`: Resets the input and result fields.
- Dynamic error and result handling:
  - Displays the sum for valid input.
  - Displays an error message for invalid input or negative numbers.

---

## 📋 Steps to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/iRajatDas/string-calculator.git
   cd string-calculator
   ```
2. **Install Dependencies**:
   ```bash
   pnpm install
   ```
3. **Run the Development Server**:
   ```bash
   pnpm dev
   ```

The application should now be running on [http://localhost:3000](http://localhost:3000).

---

## 🧪 Testing

The project uses Vitest for testing. To run the tests, use the following command:

```bash
pnpm test
```
