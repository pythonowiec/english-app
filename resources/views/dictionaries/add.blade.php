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
                            <input type="text" class="form-control" name="dictionary" autocomplete="off" list="dictionaries" placeholder="Enter your dictionary" />
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

                @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif
                
                
            </form>
        </div>
    </div>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    @if (session('status'))
        <script>
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your word has been saved',
                showConfirmButton: false,
                timer: 1500
            });
        </script>
    @endif
@endsection