import { useForm } from "react-hook-form";


export default function FormHanding(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    return(
      // JSX (JS+XML(html+own tags))
        <>
        {/* Page Header End */}
        <div className="container-xxl py-5 page-header position-relative mb-5">
          <div className="container py-5">
            <h1 className="display-2 text-white animated slideInDown mb-4">
              Form Handling 
            </h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li className="breadcrumb-item text-white active" aria-current="page">
                  Form Handling 
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Page Header End */}
        {/* About Start */}
      
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-md-4"></div>
                  <div className="col-md-4">
                  <form onSubmit={handleSubmit((data) => console.log(data))}>
                      First Name  <input {...register('firstName')} /><br/><br/>
                      Last Name  <input {...register('lastName', { required: true })} />
                        {errors.lastName && <p className="text-danger">Last name is required.</p>}<br/><br/>
                      Age <input {...register('age', { pattern: /\d+/ })} />
                        {errors.age && <p>Please enter number for age.</p>}<br/><br/>
                        <input type="submit" />
                    </form>
                                        
                  </div>
            </div>
          </div>
        </div>
      
      </>
      
    )
}