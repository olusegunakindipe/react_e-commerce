import React, {Component} from "react";

class CustomersList extends Component{

    state = {   
        pageTitle: "Employees",
        customersCount: 5,
        customers:
        [
            { id: 1,
              name: "Oluchi", 
              phone: "123-456", 
              address: { city: "Lagos"},
              photo: "https://picsum.photos/id/1010/60"
            },
            { id: 2, 
              name: "Obianuju", 
              phone: null ,
              address: { city: "Fadeyi" },
              photo: "https://picsum.photos/id/1020/60"

            },
            { id: 3, 
              name: "Emmanuella", 
              phone: "123-456", 
              address: {city: "Somolu"},
              photo: "https://picsum.photos/id/1050/60"
            },
            { id: 4, 
              name: "Chiedu", 
              phone: null , 
              address: {city: "Ketu"},
              photo: "https://picsum.photos/id/1040/60"
            }
        ]
    };
    // Executes when the user clicks on refresh button
    onRefreshClick =() =>{
        this.setState({
            customersCount: 7
        })
    }
    getPhoneTorender =(cust) => {
        return cust.phone ? cust.phone: 
            <div className="bg-danger p-2 text-center"> 
                No Phone
            </div>
    }
    getCustomerRow = () =>{
        return this.state.customers.map((cust, index) => {
            return (
            <tr key={cust.id}>
                <td>{cust.id}</td>
                <td>
                    <img src={cust.photo} alt="photos"/>
                    <div>
                        <button className="btn btn-sm btn-secondary" onClick={() => {
                            this.changePicture(cust, index)}
                            }> 
                        Change Picture 
                        </button>
                    </div>
                </td>
                <td>{cust.name}</td>
                <td>{this.getPhoneTorender(cust)}</td>
                <td>{cust.address.city}</td>

            </tr>
            )}
            )  
    }
    changePicture(cust, index){
        var custArray = this.state.customers;
        custArray[index].photo = "https://picsum.photos/id/1070/60";
        this.setState({customers: custArray});
    }
    render(){
        
        return(
        <div>
            <h4 className="ml-1 p-1">{this.state.pageTitle}
                <span className="badge badge-secondary m-2">{this.state.customersCount}</span>
            <button className="btn btn-info"
            onClick ={this.onRefreshClick}>Refresh</button>
            </h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>Cities</th>

                    </tr>
                </thead>
                <tbody>
                   {this.getCustomerRow()}
                </tbody>
            </table>
        </div>
        )
    }

}

export default MainContent;