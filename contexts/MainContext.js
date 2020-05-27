import React,{createContext,useState} from 'react';

const StoreContext = createContext(); //use this to fetch data

const StoreProvider= ({ children }) => { //use this as a provider
const [localUri,setLocalUri] = useState("");
const [filename,setFileName] = useState("");
const [filetype,setFiletype] = useState("");



const store={
    localuris:[localUri,setLocalUri],
    filenames:[filename,setFileName],
    filetypes:[filetype,setFiletype],
}

return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export {StoreContext,StoreProvider};