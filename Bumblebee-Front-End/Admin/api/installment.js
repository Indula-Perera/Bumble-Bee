getAllProduct()
function getAllProduct() {
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/api/v1/payment/payment",
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
        row.append($("<td>").text(element.name));
        row.append($("<td>").text(element.address));
        row.append($("<td>").text(element.mobile));
        row.append($("<td>").text(element.note));
        row.append($("<td>").text(element.dividedAmount));
        row.append($("<td>").text(element.total));
        tableBody.append(row);
    });
}

