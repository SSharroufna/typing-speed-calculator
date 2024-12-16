# 🖱️ Typing Speed Calculator Game 🖱️  
### By: Sarah Sharroufna & Gia Boudreau

## Try it out: [Typing Speed Calculator Game](https://typing-speed-calculator-beta.vercel.app) 🚀

## 📝 About

The **Typing Speed Game** is a fun, interactive game built with **React.js** to help improve typing speed and accuracy. In the game, words fall from the top of the screen, and the player needs to type them before they reach the bottom. Players have **3 lives** to make it through, and at the end, the app calculates and shows their **Words Per Minute (WPM)** and **accuracy**. It’s simple, but effective.

This project is a **viable product** but still a **work in progress**, so expect more features and improvements.

## 🛠️ Tech Stack

- **React.js**: The game is built using **React** for fast, dynamic user interfaces. React helps us efficiently manage the game state, handle user input, and dynamically update the UI without reloading the page.
  
  - **State Management**: We use React's `useState` to manage the player's score, remaining lives, and current word.
  - **Effect Hook**: React’s `useEffect` hook tracks the time and updates the UI when the player progresses through the game.
  
- **CSS**: For styling, we're using regular **CSS** to create a clean, simple design. The focus is on functionality first, with future plans to add themes and styling improvements.

## 🛠️ How It Works

- **Lives & Score**: Players lose a life if they type a letter incorrectly. **Backspace** lets them fix mistakes without losing a life.
- **Game Over**: When all lives are lost, the game ends and shows the final score, typing speed (WPM), and elapsed time.

## 🚀 What's Next?

We’re still working on improving the game! Some of the next features include:
- **Visual Themes**: Adding themes (like space, ocean, etc.) to make the game more visually engaging.
- **Multiple Difficulty Levels**: Let players choose longer or harder words for more of a challenge.
- **Leaderboards**: Allow users to compete and compare their scores.
