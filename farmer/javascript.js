$(document).ready(function() {
    // Function to handle form submission
    $("#product-form").submit(function(event) {
        event.preventDefault(); // Prevent default form submission
        
        var formData = new FormData(); // Create a new FormData object
        
        // Get the selected image file
        var imageFile = $("#product-image")[0].files[0];
        
        // Add the image file to the FormData object
        formData.append("image", imageFile);

        // Send the FormData object to the server (you will need to implement the server-side code to handle file upload)
        $.ajax({
            url: "upload.php", // Replace "upload.php" with the URL of your server-side upload script
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                // Handle success response from the server
                console.log("File uploaded successfully:", response);
            },
            error: function(xhr, status, error) {
                // Handle error response from the server
                console.error("Error uploading file:", error);
            }
        });
    });
});
