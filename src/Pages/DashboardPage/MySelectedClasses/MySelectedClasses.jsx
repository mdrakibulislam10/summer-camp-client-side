import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";
import ClassesCard from "../../ClassesPage/ClassesCard";
import swal from "sweetalert";

const MySelectedClasses = () => {
    const { user } = useAuth();

    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ["selectedClasses", user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/selectedClasses?email=${user?.email}`);
            return res.data;
        },
    });
    // console.log(selectedClasses);

    const handleDeleteClass = (_id) => {
        // console.log(_id);

        swal({
            title: "Are you sure?",
            text: "Do you want to delete the class?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`http://localhost:5000/selectedClass/${_id}`)
                        .then(res => {
                            // console.log(res.data);
                            if (res.data.deletedCount) {
                                refetch();
                                swal("Class has been deleted!", {
                                    icon: "success",
                                })
                            }
                        });
                }
            });
    };

    return (
        <section>
            <SectionTItle
                titleText={"All Classes"}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-1 md:mx-10 lg:mx-16">
                {selectedClasses.map((martialClass) => (
                    <ClassesCard
                        key={martialClass._id}
                        martialClass={martialClass}
                        buttonConditional={false}
                        handleDeleteClass={handleDeleteClass}
                    />
                ))}
            </div>
        </section>
    );
};

export default MySelectedClasses;