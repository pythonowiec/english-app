<div>
    @foreach ($all as $item)
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{$item->title}}</h5>
                <p class="card-text">{{$item->content}}</p>
                    <button class="btn btn-danger" wire:click="show({{$item->title}})">Delete</button>
                    {{$show}}
                        
        </div>
    </div>
    @endforeach
</div>
