import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    imgContainer: {
        height: '183px ',
        width: '248px',
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        borderRadius: "10px"
    },
})); 

const ImageUploader = () => {

    const [avatar, setAvatar] = useState('')

    const classes = useStyles()
    return (
        <div className={classes.imgContainer}>
            <div>
          
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    multiple={false}
                    id="avatar"
                    value={avatar}
                    type="file"
                       onChange={(event) =>
                                            setAvatar(event.target.value)
                                        }
                />
            </div>
        </div>
    );
};

export default ImageUploader;
