@extends('backoffice.layouts.master')
@section('title')

@endsection
@section('css')

@endsection
@section('content')
@php
$active = 'typecredits';
@endphp
<div class="pcoded-content">
    <div class="pcoded-inner-content">
        <!-- Main-body start -->
        <div class="main-body">
            <div class="page-wrapper">
                <!-- Page-body start -->
                <div class="page-body">
                    <div class="row">
                        <div class="col-12 text-center">
                            อัพเดตช่องทางชำระเงิน


                            <!---------------- การจัดการสินเชื่อส่วนบุคคล ----->
                            <br>
                            <br>
                            <!--<a class="btn btn-primary btn-sm" href="{!! route('document.create') !!}"><i class="fa fa-plus"></i>&nbsp;สร้าง</a>-->


                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="table-responsive">
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            หัวข้อ
                                                        </th>



                                                        <th class="text-center">
                                                            จัดการ
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    @foreach ($paymentmethod as $product)


                                                    <tr>
                                                        <td>

                                                            {{$product->name}}


                                                        </td>


                                                        <td>

                                                            <a title="แก้ไข"
                                                                href="{{url('editpaymentmethod',$product)}}"
                                                                class="btn btn-success btn-sm"><i
                                                                    class="fa fa-pencil"></i>edit</a>



                                                            <!-- <form action="{{ url('documentdel') }}" method="post" enctype="multipart/form-data">

                                               {!! csrf_field() !!}
                                                  <input type="hidden"  name="id" value="{{ $product->id }}">

                                                  <button  type="submit" onclick="" class="btn btn-danger btn-sm" >
                                                    <i class="fa fa-trash"></i>
                                                  </button>
                                                  
                                                </form>-->
                                                        </td>
                                                    </tr>



                                                    </td>
                                                    </tr>


                                                    @endforeach

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>

@endsection
@section('js')

@endsection
