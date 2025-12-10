import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  result: 0,
}



export const calcSlice = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    sum: (currentState, action) => {
      currentState.result = action.payload.firstNumber + action.payload.secondNumber
    },
    subtract: (currentState, action) => {
      currentState.result = action.payload.firstNumber - action.payload.secondNumber
    },
    multiply: (currentState, action) => {
      currentState.result = action.payload.firstNumber * action.payload.secondNumber
    },
    divide: (currentState, action) => {
      currentState.result = action.payload.firstNumber / action.payload.secondNumber
    },
  }
  
  
  })

export const { sum, subtract, multiply, divide } = calcSlice.actions
export default calcSlice.reducer

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer