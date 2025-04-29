const getStoredAppointment =()=>{
    const storedBookAppointmentStr = localStorage.getItem("bookList");
    if(storedBookAppointmentStr){
        const storedBookData = JSON.parse(storedBookAppointmentStr);
        return storedBookData;
    }
    else{
        return [];
    }
}
const addToStoredDb =(doctor)=>{
const storedBookData = getStoredAppointment();
const isExist = storedBookData.find(p=>p.id=== doctor.id);
if(isExist){
    return console.log('Doctor already added');
}
storedBookData.push(doctor);
localStorage.setItem('storedBook',JSON.stringify(storedBookData))
}

export const removeDoctors = (id)=>{
    const storedBookData =getStoredAppointment();
    const remainingDoctors = storedBookData.filter(doctor=>doctor.id !==id)
    localStorage.setItem('storedBook',JSON.stringify(remainingDoctors))
}

export{addToStoredDb}