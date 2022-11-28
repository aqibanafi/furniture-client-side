<>
                <Link to='/' className='hover:text-slate-400'><li>Home</li></Link>
                <Link to='/blogs' className='hover:text-slate-400'><li>Blog</li></Link>
                <Link to='/postreview' className='hover:text-slate-400'><li>Post Review</li></Link>
                <Link to='/contact' className='hover:text-slate-400'><li>Contact</li></Link>
                {
                    user?.email &&
                    <Link to='/dashbaord' className='hover:text-slate-400'><li>Dashbaord</li></Link>
                }
        </>



<div className="navbar-end">
                    <div>
                        {
                            user?.email ?
                                <></>
                                :
                                <Link to='/login'><button className='btn btn-secondary'>Login</button></Link>
                        }
                    </div>
                    <div>
                        {
                            user?.email &&
                            <div>
                                <Link onClick={handleLogOut} className='btn btn-secondary hover:bg-slate-600'>Logout</Link>
                            </div>
                        }
                    </div>
                </div>