(function(global){

    //Set up  a namespace for utility Lecture 57
    var ajaxUtils = {};


    //Returns an HTTP request Object
    function getRequestObject(){
        if(window.XMLHttpRequest){
            return (new XMLHttpRequest());
        }
        else if(window.ActiveXObject){
            //for old ie browsers(optional)
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else{
            global.alert("Ajax is not supported!");
            return (null);
        }
    }


    //Makes an Ajax GET request to 'requestUrl'
    ajaxUtils.sendGetRequest = 
        function(requestUrl, responseHandler){
            var request = getRequestObject();
            request.onreadystatechange = 
                function(){
                    handleResponse(request, responseHandler);
                };
                request.open("GET", requestUrl, true); //true - asynchronous; false - synchronous
                request.send(null); //POST only
        };


        //Only calls user provided 'responseHandler'
        //function if response is ready
        // and not an err
        function handleResponse(
            request, responseHandler){
                if((request.readyState == 4)&&
                (request.status == 200)){
                    responseHandler(request);
                }
        }


        //Expose utility to global object
        global.$ajaxUtils = ajaxUtils;


})(window);