class Division {
    static divisions = [
        {
            name: 'Dhaka',
            districts: ["Dhaka", "Gazipur", "Tangail", "Narayanganj", "Manikganj", "Munshiganj", "Faridpur"],
        },
        {
            name: 'Chittagong',
            districts: ["Chittagong", "Cox's Bazar", "Feni", "Rangamati", "Khagrachari", "Chandpur", "Lakshmipur"],
        },
        {
            name: 'Rajshahi',
            districts: ["Rajshahi", "Bogra", "Pabna", "Natore", "Joypurhat", "Sirajganj"],
        },
        {
            name: 'Khulna',
            districts: ["Khulna", "Bagerhat", "Jessore", "Satkhira", "Magura", "Narail", "Khustia"],
        },
        {
            name: 'Barishal',
            districts: ["Barishal", "Bhola", "Patuakhali", "Pirojpur", "Jhalokati", "Barguna"],
        },
        {
            name: 'Sylhet',
            districts: ["Sylhet", "Moulvibazar", "Habiganj", "Sunamganj"],
        },
        {
            name: 'Rangpur',
            districts: ["Rangpur", "Dinajpur", "Kurigram", "Thakurgaon", "Lalmonirhat", "Panchagarh", "Nilphamari"],
        },
        {
            name: 'Mymensingh',
            districts: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"],
        }

    ];

    static getDistrict(divisionName) {
        const division = this.divisions.find((div) => div.name === divisionName);
        return division ? division.districts : [];
    }

    static getDivision(){
        return this.divisions.map((div)=>div.name);
    }
}
export default Division