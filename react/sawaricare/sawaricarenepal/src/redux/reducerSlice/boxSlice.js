import { createSlice } from '@reduxjs/toolkit';

export const boxSlice = createSlice({
  name: 'box',
  initialState: {
  width: 40,
  height: 40,
  backgroundColor: 'red',
  borderRadius: 0, 
  padding: 20,
  margin: 20,
  marginLeft: 50,
  marginTop: 0, 
  isCircle: false
},
  reducers: {
    changeShape: (state) => {
      if (state.isCircle) {
        state.borderRadius = 0;  
        state.isCircle = false;
      } else {
        state.borderRadius = 50;  
        state.height = state.width;  
        state.isCircle = true;
      }
    },
    increaseSize: (state) => {
      state.width += 1;
      state.height += 1;
    },
    decreaseSize: (state) => {
      state.width -= 1;
      state.height -= 1;
    },
    changeBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    moveRight: (state) => {
      state.marginLeft += 20;
    },
    moveLeft: (state) => {
      state.marginLeft -= 20;
    },
    moveUp: (state) => {
      state.marginTop -= 20;
    },
    moveDown: (state) => {
      state.marginTop += 20;
    }
  }
});

export const { changeShape, increaseSize, decreaseSize, changeBackgroundColor, moveRight, moveLeft,moveDown,moveUp } = boxSlice.actions;

export default boxSlice.reducer;
