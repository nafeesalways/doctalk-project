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
const addToStoredDb =(id)=>{
const storedBookData = getStoredAppointment();
if(storedBookData.includes(id)){
    alert('id already exists')
}
else{
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("bookList",data);
}
}
export{addToStoredDb}