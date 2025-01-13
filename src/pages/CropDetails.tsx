import {SearchBar} from "../components/SearchBar.tsx";
import {ChangeEvent, useState} from "react";

export function CropDetails() {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };
    return (
        <>
            <SearchBar
                pagename="Crop Details"
                buttonName="Add Log"
                inputValue={searchValue}
                onInputChange={handleInputChange}
            />
            <p>Search Value: {searchValue}</p>
        </>
    );
}