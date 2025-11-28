import { useState } from "react"
import Button from "./TagButtons"


export default function SideMenu(){
    const categories = [
        {id :1 , title:"New"},
        {id :2 , title:"Home"},
        {id :3 , title:"About"},
        {id :4 , title:"Contact", c : (<div>😊😊😊😊</div>)}
    ]
    const categoryElements = categories.map(category =>{
        return <Button key={category.id} title={category.title}>
            {category.c}
        </Button>
    })
    return(
        <div style={{margin:"25px", border:"solid teal 5px"}} >
            
            {categoryElements}
        </div>
    )
}