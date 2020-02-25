import React, { useState } from "react";
import { Navbar } from "./navbar";
import { ToDo } from "./todo";

//include images into your bundle

//create your first component
export function Home() {
	const [newTodo, setNewTodo] = useState();
	const [toDoList, setToDoList] = useState([]);

    function getTodo() {
        fetch("https://assets.breatheco.de/apis/fake/todos/user/smoure", {
            method: "GET"
        })
            .then(resp => resp.json())
            .then(data => {
                console.log('getTodo', data);
                setNewTodo(data);
            });
    }

    function saveTodo(listToSave) {
        fetch("https://assets.breatheco.de/apis/fake/todos/user/smoure", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(listToSave),
        })
            .then(resp => resp.json())
            .then(data => {
                console.log('saveTodo', data);
                getTodo();
            });
    }

	useEffect(() => {
        getTodo();
	}, []);

	return (
		<>
			<div className="container">
				<div className="d-flex justify-content-center">
					<input
						value={newTodo}
						className="form-control form-control-lg col-md-6"
						type="text"
						placeholder="Need to"
						onChange={e => setNewTodo(e.target.value)}
						onKeyPress={event => {
							if (event.key == "Enter") {
								setToDoList(toDoList.concat(newTodo));
								setNewTodo("");
							}
						}}
					/>
					<button type="button" className="btn btn-info">
						{"+"}
					</button>
				</div>
				<div className="">
					{toDoList.map((item, index) => {
						return (
							<div
								key={index}
								className="container d-flex justify-content-center p-2">
								<button
									className="btn btn-danger"
									onClick={() => {
										setToDoList(
											toDoList.filter(
												(e, i) => index !== i
											)
										);
									}}>
									X
								</button>

								<div
									id="todo"
									className=" lg col-md-6 rounded border">
									{item}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

// const [list, setList] = useState(arr);
// const [header, setHeader] = useState("Testing the state of the component");
//<ToDo todo=
//<Navbar />
//<div >
// 	{" "}
// 	{item}
// </div>
//
// <div className="text-center mt-5">
// 	<h1>{header}</h1>
// 	<p>
// 		<img src={rigoImage} />
// 	</p>
// 	<div>
// 		<input onChange={e => setHeader(e.target.value)} />
// 	</div>
// 	<a
// 		href="#"
// 		className="btn btn-success"
// 		onMouseOver={() => {
// 			setList(
// 				list.concat({
// 					city: "BRIMFIELD",
// 					loc: [-72.188455, 42.116543],
// 					pop: 3706,
// 					state: "MA",
// 					_id: "01010",
// 					color: "primary"
// 				})
// 			);
// 			setHeader("THE HEADER HAS CHANGED");
// 		}}>
// 		Change the state
// 	</a>

// 	<div className="d-flex justify-content-start">
// 		{list.map((item, index) => {
// 			return (
// 				<div className={"bg-" + item.color} key={index}>
// 					<div>{item.city}</div>
// 					<div>{item.state}</div>
// 					<div>{item._id}</div>
// 					<div>{item.pop}</div>
// 				</div>
// 			);
// 		})}

// 		<Card
// 			imgUrl="http://www.google.com"
// 			title="Google"
// 			buttonColor={""}
// 		/>
// 	</div>
// </div>

// let arr = [
// 	{
// 		city: "AGAWAM",
// 		loc: [-72.622739, 42.070206],
// 		pop: 15338,
// 		state: "MA",
// 		_id: "01001",
// 		color: "danger"
// 	},
// 	{
// 		city: "CUSHMAN",
// 		loc: [-72.51564999999999, 42.377017],
// 		pop: 36963,
// 		state: "MA",
// 		_id: "01002",
// 		color: "warning"
// 	},
// 	{
// 		city: "BARRE",
// 		loc: [-72.10835400000001, 42.409698],
// 		pop: 4546,
// 		state: "MA",
// 		_id: "01005",
// 		color: "info"
// 	},
// 	{
// 		city: "BELCHERTOWN",
// 		loc: [-72.41095300000001, 42.275103],
// 		pop: 10579,
// 		state: "MA",
// 		_id: "01007",
// 		color: "success"
// 	},
// 	{
// 		city: "BLANDFORD",
// 		loc: [-72.936114, 42.182949],
// 		pop: 1240,
// 		state: "MA",
// 		_id: "01008",
// 		color: "primary"
// 	},
// 	{
// 		city: "BRIMFIELD",
// 		loc: [-72.188455, 42.116543],
// 		pop: 3706,
// 		state: "MA",
// 		_id: "01010",
// 		color: "secondary"
// 	}
// ];
