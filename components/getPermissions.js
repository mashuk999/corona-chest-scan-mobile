import React from 'react';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export const getPermissions=()=>{
    const [permission,setPermission] = React.useState(false);
    
    const getPermissionAsync = async () => {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
          else{
              setPermission(true);
          }
        
      };

    React.useEffect(
        () => {
        getPermissionAsync();
      }, []);
    
      return{
        permission
      };
}