export default{
    /*html*/
    template: `
    <table class="table table-striped">
    <tr>
        <th>Id</th>
        <td>{{id}}</td>
    </tr>
    <tr>
        <th>Email</th>
        <td><input type="text" :value="email" @input="$emit('update:email',$event.target.value)"></td>
    </tr>
    <tr>
        <th>Name</th>
        <td><input type="text" :value="name" @input="$emit('update:name',$event.target.value)"></td>
    </tr>
    <tr>
        <th>Phone Number</th>
        <td ><input type="number"input :value="phoneNumber" @input="$emit('update:phoneNumber',$event.target.value)"></td>
    </tr>
</table>
    `,
    props: ["id","email","name","phoneNumber","isEditing"],
    emits: ["update:email","update:name","update:phoneNumber"]
}