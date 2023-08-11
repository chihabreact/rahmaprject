import axios from "axios";
const API_URL = process.env.REACT_APP_RAHMA_GROUP_API_URL;

const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("files", image);

    try {
      const imageData = await axios.post(`${API_URL}/api/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const imageId = imageData.data[0].id;
      return imageId;
    } catch (err) {
      console.log(err);
      return null;
    }
}

const getProducts = async () => {
    try {
        const productsRequest = await fetch(`${API_URL}/api/products?populate=*`);
        const productsData = await productsRequest.json();
        return productsData.data;
      } catch (err) {
        console.error(err);
        return null;
      }
}

const getCategories = async () => {
    try {
        const categoriesRequest = await axios.get(`${API_URL}/api/products?populate=*`);
        const categoriesData = await categoriesRequest.json();
        return categoriesData.data;
      } catch (err) {
        console.error(err);
        return null;
      }    
}

const addCategory = async (title, image) => {
    const imageId = await uploadImage(image);
    if (!imageId) return;
  
    try {
        const response = await axios.post(`${API_URL}/api/categories`, {
          "data": {
            title,
            image: imageId
          }
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        return response;
      } catch (err) {
        console.log(err);
        return null;
      }
}

const addProduct = async (title, description, image1, image2, image3) => {
    const image1Id = await uploadImage(image1);
    const image2Id = await uploadImage(image2);
    const image3Id = await uploadImage(image3);
    
    if (!image1Id || !image2Id || !image3Id) return;
    try {
        const response = await axios.post(`${API_URL}/api/products`, {
          "data": {
            title,
            description,
            image1: image1Id,
            image2: image2Id,
            image3: image3Id
          }
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        return response;
      } catch (err) {
        console.log(err);
        return null;
      }
}

const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${API_URL}/api/products/${productId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response;
  } catch (err) {
    console.log(err);
    return null;
  }
}

const signIn = async (username, password) => {
  try {
    const authResponse = await axios.post(`${API_URL}/api/auth/local`, {
      identifier: username,
      password
    });
    const token = authResponse.data.jwt;
    return token;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export {
    API_URL,
    getProducts,
    getCategories,
    addProduct,
    addCategory,
    deleteProduct,
    signIn
}