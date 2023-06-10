 import Footer from './Footer';
function Doli() {
    let obj = {
    mjesto: "Split",
    broj: "021 365 257",
    mail: "dancingbear@gmail.com",
    };
  return (
    <div className="Doli">      
     <Footer props={obj} />

    </div>
     
  );
}

export default Doli;
