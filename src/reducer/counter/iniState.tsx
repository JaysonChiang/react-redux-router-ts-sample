const dataLocalStorage = JSON.parse(localStorage.getItem("counter") as string);

const iniState =  dataLocalStorage || {
    value: 0
}

export default iniState;
