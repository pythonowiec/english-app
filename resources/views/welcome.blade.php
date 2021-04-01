@extends('layouts.app')
@section('content')

<div class="container-fluid">
    <div class="row">
        <div class="col-2"></div>
        <div class="col-12">
            <div class="alert alert-primary text-center" role="alert">
                Learn languages <a href="#" class="alert-link">with</a> the best online english app.
            </div>
        </div>
        <div class="col-2"></div>
    </div>

    <div class="row mb-5">
        <div class="col-1"></div>
        <div class="col-10">
            <div class="container">
                <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="5000">
                        <img src="images/pexels-arthur-mazi-2297856.jpg" class="d-block w-100" alt="pic1">
                        <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="images/pexels-martin-péchy-340151.jpg" class="d-block w-100" alt="pic2">
                        <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="images/pexels-martin-péchy-340151.jpg" class="d-block w-100" alt="pic3">
                        <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="col-1"></div>
    </div>
</div>
@endsection
