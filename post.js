function PostQuestion() {

    let fullname = document.getElementById("fullname").value;
    let question = document.getElementById("question").value;
    let postquery = document.getElementById("postquery");

    let pq = postquery.insertRow(-1);

    let fn = pq.insertCell(0);
    fn.innerHTML = fullname;

    let q = pq.insertCell(1);
    q.innerHTML = question;

}

