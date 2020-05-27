import { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../contexts/MainContext'
import axios from 'react-native-axios';
import { Platform } from 'react-native';


export const useGetPrediction = () => {
    const [data, setData] = useState("");
    const [loadmore, setLoadmore] = useState(0);
    const [loadcomplete, setLoadcomplete] = useState(false);

    const { localuris, filenames, filetypes } = useContext(StoreContext);
    const [localUri, setLocalUri] = localuris;
    const [filename, setFileName] = filenames;
    const [filetype, setFiletype] = filetypes;


    useEffect(
        () => {
            var data = new FormData();
            data.append('photo', {
                uri: localUri,
                name: Date.now().toString()+filename,
                type: 'image/jpg'
            });

            // Create the config object for the POST
            // You typically have an OAuth2 token that you use for authentication
            const config = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data;',
                },
                body: data
            };

            fetch('IBM URL', config).then((response) => response.json())
            .then((json) => {
              console.log(json[0].category);
              setData(json[0].category);
            })
            .catch((error) => {
              console.error(error);
            });

            
        }, [loadmore]);

return {
    data,
    loadcomplete
};
};


