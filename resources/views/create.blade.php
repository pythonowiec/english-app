@extends('layouts.app')

@section('content')
    <div class="col-sm-3">
        <h3>Add new post</h3>
        <form method="POST" action="/store">
            @csrf 
            <div class="form-group">
                    <label for="formGroupExampleInput">Title</label>
                    <input type="text" name="title" class="form-control" id="formGroupExampleInput" placeholder="title">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">Content</label>
                <input type="text" name="content" class="form-control" id="formGroupExampleInput2" placeholder="content">
            </div>
            <button class="btn btn-success">Add</button>
        </form> 
    </div>
@endsection

