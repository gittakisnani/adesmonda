export default function previewImage(fileRef, src, setSrc) {
    const file = fileRef.current.files[0];
    const reader  = new FileReader();
    
    reader.onloadend = function () {
        setSrc(String(reader.result))
    }
    
    if (file) {
        reader.readAsDataURL(file);
    } else {
        setSrc('')
    }
}