@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <form method="POST" action="/dictionaries/add">
                @csrf
                <div class="form-row">
                    <div class="col">
                        <input type="text" name="polish" class="form-control" placeholder="Polish">
                    </div>
                    <div class="col">
                        <input type="text" name="english" class="form-control" placeholder="English">
                    </div>
                    <div class="col">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="dictionaries">Dictionaries</label>
                            </div>
                            <input type="text" class="form-control" name="dictionary" autocomplete="off" list="dictionaries" placeholder="Enter your dictionaries" />
                            <datalist id="dictionaries">

                                @foreach ($titles as $title)
                                    <option value="{{$title[0]['dictionary']}}">{{$title[0]['dictionary']}}</option>
                                @endforeach

                            </datalist>
                          </div>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="col">
                        <button type="submit" class="btn btn-primary btn-md mt-4 float-right">Add</button>
                    </div>
                </div>
                
                
            </form>
        </div>
    </div>
@endsection