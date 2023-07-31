import styles from './add-address-dialog.module.scss';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, OutlinedInput} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, {useContext, useRef, useState} from "react";
import {Address, UniqueID} from "../../types/DataTypes";
import {useForm} from "react-hook-form";
import {AppStoreContext} from "../app";

export interface AddAddressDialogProps {
  workUnitId: UniqueID;
}

export function AddAddressDialog({workUnitId}: AddAddressDialogProps) {

  const appStore = useContext(AppStoreContext);

  const [open, setOpen] = useState(false);

  const [errors, setErrors] =
    useState<{address?:boolean, zipCode?:boolean, settlementName?: boolean}>({});

  const inputRef = useRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: {},
    reset
  } = useForm<Partial<Address>>()


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const onSubmitHandler = (data: Partial<Address>) => {
    console.log('On Form Submit:', data, errors);
    data.id = workUnitId;
    data.dateAdded = new Date().toDateString();
    const addresses = [...appStore.addresses];
    addresses.push(data as Address);
    appStore.setAddresses(addresses);
    handleClose();
  }

  const onCheckFormHandler = () => {
    const data = watch();
    console.log('On Check :', data);

    const errors:any = {}

    if (!data.address) {
      errors['address'] = true;
    }

    if(!data.zipCode) {
      errors.zipCode = true;
    }


    if(!data.settlementName) {
      errors.settlementName = true;
    }

    setErrors(errors);

  }

  return (
    <div>
      <Button variant={'contained'} startIcon={<AddIcon/>} className={styles.button} onClick={handleClickOpen}>
        Добави адрес</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <DialogTitle id="alert-dialog-title">
            {"Нов Адрес"}
          </DialogTitle>
          <DialogContent>
            <div className={styles.vcontainer}>
              <div className={styles.hcontainer}>
                <FormControl>
                  <OutlinedInput placeholder={"Град"}
                                 id={'city'}
                                 sx={{
                                   '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                     borderColor: errors.settlementName ? 'red' : undefined,
                                   },
                                 }}
                                 className={`${styles.inputField}`}  {...register("settlementName", {
                    required: true
                  })} inputRef={inputRef}/>
                </FormControl>
                <div className={styles.hcontainer}>
                  <FormControl>
                    <OutlinedInput placeholder={"Код"}
                                   id={'zipCode'}
                                   sx={{
                                     '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                       borderColor: errors.zipCode ? 'red' : undefined,
                                     },
                                   }}
                                   className={`${styles.inputField}`}  {...register("zipCode", {
                      required: true
                    })}/>
                  </FormControl>
                </div>
              </div>
              <div className={[styles.hcontainer, styles.grow].join(' ')}>
                <FormControl className={styles.formControl}>
                  <OutlinedInput placeholder={"Адрес"}
                                 id={'address'}
                                 sx={{
                                   '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                     borderColor: errors.address ? 'red' : undefined,
                                   },
                                 }}
                                 className={`${styles.inputField}`}  {...register("address", {
                    required: true
                  })}/>
                </FormControl>
              </div>
            </div>

          </DialogContent>
          <DialogActions>
            <Button variant={'outlined'} onClick={handleClose}>Затвори</Button>
            <Button variant={'contained'} type='submit' id={'submitButton'} onClick={onCheckFormHandler}>Добави</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default AddAddressDialog;
