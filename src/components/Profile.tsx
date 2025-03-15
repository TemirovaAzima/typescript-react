import React, {useState} from 'react';
type ProfileType ={
    name: string,
    age: number,
}
export const Profile =()=>{
    const [profile, setProfile] = useState<ProfileType>({
            name: "",
            age: 0,
    });

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        const name = e.target.name ;
        const value = e.target.value;
        // const {name,value} = e.target
        // setProfile((prevProfile)=>({
        //     ...prevProfile,
        //         [name] : value
        // }))
        // setProfile((prevProfile)=>({
        //     ...prevProfile,
        //     [name] : name === "age" ? Number(value) || 0 : value // converting to a number
        // }));
        setProfile((prevProfile)=>({
            ...prevProfile,
            [name] : isNaN(Number(value)) ? value : Number(value)// check if value can be a number
        }));
    };

    return(
        <div>
            <h1>User Profile</h1>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        value={profile.name}
                        name="name"
                        onChange={handleChange}
                        placeholder={"Enter ur name"}
                    />
                </label>
                <label>
                    Age:
                    <input
                        type="number"
                        value={profile.age}
                        name="age"
                        onChange={handleChange}
                        placeholder={"Enter ur age"}
                    />
                </label>
            </div>
            <h3>Profile Information</h3>
            <p>Name: {profile.name} </p>
            <p>Age: {profile.age}</p>
        </div>
    );
};