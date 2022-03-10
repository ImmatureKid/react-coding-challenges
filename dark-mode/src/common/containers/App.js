import React from 'react';
const myContext = React.createContext();
function reducer(state,action){
    if(action.type=="dark"){
      return {isdark:true}
    }else if(action.type=="sun"){
      return{isdark:false}
    }else{
      return state
    }
}

 function AppContainer({ children }) {
  const [state,dispatch]=React.useReducer(reducer,{isdark:false});
  return <myContext.Provider value={{state,dispatch}}>
    {children}
  </myContext.Provider>;
}
export{AppContainer,myContext};
