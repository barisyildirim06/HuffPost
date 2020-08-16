import React, {useState} from 'react'
import {Typography, Button, Form, Input} from 'antd';
import FileUpload from './utils/FileUpload'
//antd ile Style değiştiriyoruz
import Axios from 'axios';

const {Title} =Typography;
const {TextArea} = Input
const Categories = [
    {key:0, value: "U.S. NEWS"},
    {key:1, value:"CORONAVIRUS"},
    {key:2, value:"POLITICS"},
    {key:3, value:"ENTERTAINMENT"},
    {key:4, value:"WORLD NEWS"},
    {key:5, value:"LIFE"},
    {key:6, value:"SHOPIPING"}
]

function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [SubtitleValue, setSubtitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [CategoryValue, setCategoryValue] = useState(2)
    const [Imageshorizontal, setImageshorizontal] = useState([])
    const [Imagesvertical, setImagesvertical] = useState([])

    const onTitleChange= (e) => {
        setTitleValue(e.currentTarget.value)
    }
    const onSubtitleChange= (e) => {
        setSubtitleValue(e.currentTarget.value)
    }
    const onDescriptionChange= (e) => {
        setDescriptionValue(e.currentTarget.value)
    }
    const onCategorySelectChange= (e) => {
        setCategoryValue(e.currentTarget.value)
    }
    
    const updateImageshorizontal = (newImages) => {
        setImageshorizontal(newImages)
    }
    const updateImagesvertical = (newImages) => {
        setImagesvertical(newImages)
    }
    const onSubmit = (e) => {
        e.preventDefault();

        if(!TitleValue || !DescriptionValue || !CategoryValue || !Imageshorizontal || !Imagesvertical) {
            return alert('Fill all the fields!!')
        }

        const variables = {
            //reduxtan çektik
            writer: props.user.userData._id,
            title: TitleValue,
            subtitle: SubtitleValue,
            description: DescriptionValue,
            imageshorizontal: Imageshorizontal,
            imagesvertical:Imagesvertical,
            categories: CategoryValue
        }

        Axios.post('/api/product/uploadProduct', variables)
        .then(response => {
            if(response.data.success) {
                alert('Product Successfully Uploaded')
                props.history.push('/')
            } else {
                alert('Failed to upload Product')
            }
        })
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}>Upload Travel Product</Title>
            </div>
            
            <Form onSubmit={onSubmit}>
            {/* DropZone */}
            <label>Vertical</label>
            <FileUpload refreshFunction={updateImagesvertical}/>
            <label>Horizontal</label>
            <FileUpload refreshFunction={updateImageshorizontal}/>
            <br />
            <br />
            <label>Title</label>
            <TextArea rows="2" cols="100"
                onChange={onTitleChange}
                value={TitleValue}
            />
            <br />
            <br />
            <label>Subtitle</label>
            <TextArea rows="2" cols="100"
                onChange={onSubtitleChange}
                value={SubtitleValue}
            />
            <br />
            <br />
            <label>Description</label>
            <TextArea cols="100" rows="20"
                onChange={onDescriptionChange}
                value={DescriptionValue}
            />
                <br /><br />
                <select onChange={onCategorySelectChange} value={CategoryValue}>
                    {Categories.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
            <br/>
            <br/>
            <Button
                onClick={onSubmit}
            >
                Submit
            </Button>

            </Form>


        </div>
    )
}

export default UploadProductPage;