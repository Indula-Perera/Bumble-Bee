getAllProduct();
function saveEmp() {
    let name = $("#input2").val();
    let desc = $("#input3").val();
    let price = $("#input4").val();
    let category = $("#input5").val();
    let i_link = $("#input6").val();

    $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/product/saveproducts",
        async: true,
        data: JSON.stringify({
            id: "",
            title: name,
            description: desc,
            price: price,
            category: category,
            image: i_link,
        }),
        success: function (data) {
            alert("Product Added Successfully");
            window.location.href = '?refresh=true';
        },
        error: function (xhr, exception) {
            alert("Error");
        },
    });
}

function updateEmp() { 

    let id = $("#input1").val();
    let name = $("#input2").val();
    let desc = $("#input3").val();
    let price = $("#input4").val();
    let category = $("#input5").val();
    let i_link = $("#input6").val();

    $.ajax({
        method: "PUT",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/product/product/"+id,
        async: true,
        data: JSON.stringify({
            id: "",
            title: name,
            description: desc,
            price: price,
            category: category,
            image: i_link,
        }),
        success: function (data) {
            alert("Product Updated Successfully");
            window.location.href = '?refresh=true';
        },
        error: function (xhr, exception) {
            alert("Error");
        },
    });

}

function deleteEmp() {
    let id = $("#input1").val();

    $.ajax({
        method: "DELETE",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/product/product/" + id,
        async: true,
        success: function (data) {
            alert("Product Deleted Successfully");
            getAllProduct();
            window.location.href = '?refresh=true';
        },
        error: function (xhr, exception) {
            alert("Error");
        },
    });
}

function getAllProduct() {
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/api/v1/product/products",
        async: true,
        success: function (data) {
            populateTable(data);
        },
        error: function (xhr, exception) {
            alert("Error");
        },
    });
}

function populateTable(data) {
    var tableBody = $("#prodTable");
    // Clear the existing table body
    tableBody.empty();
    // Loop through the data and append rows to the table
    $.each(data, function (index, element) {
        var row = $("<tr>");
        row.append($("<td>").text(element.id));
        row.append($("<td>").text(element.title));
        row.append($("<td>").text(element.description));
        row.append($("<td>").text(element.price));
        row.append($("<td>").text(element.category));
        row.append($("<td>").text(element.image));
        tableBody.append(row);
    });
}



function resetEmp() { 
    let id = $("#input1").val("");
    let name = $("#input2").val("");
    let desc = $("#input3").val("");
    let price = $("#input4").val("");
    let category = $("#input5").val("");
    let i_link = $("#input6").val("");
}



$(document).ready(function () {
    $(document).on('click','#prodTable tr',function(){
        var col0= $(this).find('td:eq(0)').text();
        var col1= $(this).find('td:eq(1)').text();
        var col2= $(this).find('td:eq(2)').text();
        var col3= $(this).find('td:eq(3)').text();
        var col4= $(this).find('td:eq(4)').text();
        var col5= $(this).find('td:eq(5)').text();


        $('#input1').val(col0);
        $('#input2').val(col1);
        $('#input3').val(col2);
        $('#input4').val(col3);
        $('#input5').val(col4);
        $('#input6').val(col5);
    })
})
