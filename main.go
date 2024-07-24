package main

import (
	"fmt"
	"net/http"
	"text/template"
)

func home(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.Error(w, "Page not found", http.StatusNotFound)
		return
	}

	if r.Method != http.MethodGet {
		http.Error(w, "Not allowed", http.StatusMethodNotAllowed)
		return
	}

	tmpl, err := template.ParseFiles("index.html")
	if err != nil {
		fmt.Println(err)
		http.Error(w, "Internal error server", http.StatusInternalServerError)
		return
	}

	err = tmpl.ExecuteTemplate(w, "index.html", nil)
	if err != nil {
		fmt.Println(err)
		http.Error(w, "Internal error server", http.StatusInternalServerError)
		return
	}
}

func main() {
	http.HandleFunc("/", home)

	fs := http.FileServer(http.Dir("./statics"))
	http.Handle("/statics/", http.StripPrefix("/statics/", fs))

	port := "8080"
	fmt.Printf("Server starting on port http://localhost:%v\n", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		fmt.Println(err)
	}
}
