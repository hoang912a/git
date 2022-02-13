import "./register.css";

export default function Register() {
  return (
    <div className="component_login" >

      <div className="title_login">

        <p className="loginText one">Đăng nhập hoặc đăng ký</p>
        <div className="put_login">
          <h2>Chào mừng đến với Shoppe</h2>
          <div className="form_login">
            <SelectOne />
          </div>
          <input className="input_one" type="text" placeholder="Phone number:" />
        </div>

        <p className="loginText two">chúng tôi sẽ gọi điện hoặc nhắn tin cho bạn để xác nhận số điện thoại...</p>
        <button className="button_one">Tiếp Tục</button>


      </div>

    </div>
  );
}
function SelectOne(props) {
  let select_one_objects = [
    {
      id: 1,
      name: "Viet Nam"
    },
    {
      id: 2,
      name: "Japan"
    },
    {
      id: 3,
      name: "Indian"
    }
  ]


  return (
    <select id="select_one" >
      <option value="quoc gia">Quốc gia: </option>
      {select_one_objects.map((element, index) => {
        return <option key={index} value={element.name}>{element.name}</option>
      })}
    </select>

  )
}